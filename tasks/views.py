from rest_framework.decorators import api_view
from rest_framework.response import Response
import uuid

tasks = []  # in-memory storage

@api_view(['GET'])
def list_tasks(request):
    return Response(tasks)

@api_view(['POST'])
def add_task(request):
    task = {
        "id": str(uuid.uuid4()),
        "title": request.data.get("title"),
        "completed": False
    }
    tasks.append(task)
    return Response(task)

@api_view(['PUT'])
def toggle_task(request, task_id):
    for task in tasks:
        if task["id"] == task_id:
            task["completed"] = not task["completed"]
            return Response(task)
    return Response({"error": "Task not found"})

@api_view(['DELETE'])
def delete_task(request, task_id):
    global tasks
    tasks = [t for t in tasks if t["id"] != task_id]
    return Response({"success": True})
