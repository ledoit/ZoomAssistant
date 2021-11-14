# takes care of assistant tasks -- todos, note-taking, highlighting
from configure import keyphrase

tasks = ["add to do", "update calendar"] # what else can we include...


# when keyphrase is detected, runs task if valid
def execute(input):
    current_task = ""
    for task in tasks:
        index = input.find(task)
        if index != -1:  # task detected
            current_task = task
            break
    body = input[len(keyphrase) + len(current_task) + 2:]  # rest of task string
    if current_task == "":
        return False

    # todos list
    if current_task == tasks[0]:
        todo(body)
        return True


def todo(item):
    pass
