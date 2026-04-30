
import sys

def check_balance(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    braces = 0
    brackets = 0
    parentheses = 0
    
    in_string = None
    in_comment = False
    
    i = 0
    while i < len(content):
        char = content[i]
        
        if in_comment:
            if char == '*' and i + 1 < len(content) and content[i+1] == '/':
                in_comment = False
                i += 2
                continue
        elif in_string:
            if char == '\\':
                i += 2
                continue
            if char == in_string:
                in_string = None
        else:
            if char == '/' and i + 1 < len(content) and content[i+1] == '*':
                in_comment = True
                i += 2
                continue
            if char == '/' and i + 1 < len(content) and content[i+1] == '/':
                # Skip to end of line
                while i < len(content) and content[i] != '\n':
                    i += 1
                continue
            if char in ['"', "'", '`']:
                in_string = char
            elif char == '{':
                braces += 1
            elif char == '}':
                braces -= 1
            elif char == '[':
                brackets += 1
            elif char == ']':
                brackets -= 1
            elif char == '(':
                parentheses += 1
            elif char == ')':
                parentheses -= 1
        
        i += 1
        
    print(f"Braces: {braces}")
    print(f"Brackets: {brackets}")
    print(f"Parentheses: {parentheses}")

if __name__ == "__main__":
    check_balance(sys.argv[1])
