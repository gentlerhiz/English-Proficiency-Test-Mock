"""
Properly add instructions to all questions without instruction field.
This version carefully handles the TypeScript string formatting.
"""

import re

print("Reading file...")
with open('app/data/questions.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

def generate_instruction(category, question):
    """Generate appropriate instruction based on category and question."""
    q_lower = question.lower()
    has_blank = '___' in question
    
    if category == 'Parallelism':
        if has_blank:
            return 'Complete the sentence maintaining parallel structure with the existing elements.'
        else:
            return 'Choose the option where all items in the series maintain the same grammatical form.'
    
    elif category == 'Concord':
        if has_blank:
            if 'neither' in q_lower or 'either' in q_lower:
                return 'Apply the rule of proximity - the verb should agree with the nearest subject.'
            elif any(word in question for word in ['team', 'family', 'committee', 'group', 'faculty', 'class', 'athletics']):
                return 'Determine whether the collective noun is acting as a single unit (singular) or as individuals (plural).'
            else:
                return 'Choose the verb form that agrees with the subject in number and person.'
        else:
            return 'Identify the sentence where the verb correctly agrees with its subject.'
    
    elif category == 'Mechanics':
        if 'spell' in q_lower:
            return 'Identify the correct spelling from the options provided.'
        elif 'capital' in q_lower:
            return 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.'
        else:
            return 'Select the option that follows standard mechanics conventions.'
    
    elif category == 'Vocabulary':
        if has_blank:
            return 'Choose the word that best fits the context and meaning of the sentence.'
        else:
            return 'Select the most contextually appropriate word based on meaning and register.'
    
    elif category == 'Stylistic Variation':
        return 'Choose language appropriate to the context, audience, and level of formality.'
    
    elif category == 'Cohesion & Coherence':
        return 'Select the option that best maintains cohesion and coherence in the passage.'
    
    return 'Choose the best option from the choices provided.'

print("Processing lines...")
new_lines = []
i = 0
added_count = 0

while i < len(lines):
    line = lines[i]
    new_lines.append(line)
    
    # Check if this is a question line
    if "question: '" in line:
        # Extract category and question
        category = None
        question = None
        
        # Look back for category
        for j in range(i-1, max(0, i-5), -1):
            if "category: '" in lines[j]:
                match = re.search(r"category: '([^']+)'", lines[j])
                if match:
                    category = match.group(1)
                break
        
        # Extract question text
        match = re.search(r"question: '([^']+)'", line)
        if match:
            question = match.group(1)
        
        # Check if next line is NOT instruction (it's options or something else)
        if i + 1 < len(lines) and 'instruction:' not in lines[i+1]:
            if category and question:
                # Generate and insert instruction
                instruction = generate_instruction(category, question)
                indent = '    '
                instruction_line = f"{indent}instruction: '{instruction}',\n"
                new_lines.append(instruction_line)
                added_count += 1
    
    i += 1

print(f"Added {added_count} instructions")

print("Writing file...")
with open('app/data/questions.ts', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("✅ Successfully added instructions to all questions!")
