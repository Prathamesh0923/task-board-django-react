from django.urls import path
from .views import list_tasks, add_task, toggle_task, delete_task

urlpatterns = [
    path('tasks/', list_tasks),
    path('tasks/add/', add_task),
    path('tasks/<str:task_id>/', toggle_task),
    path('tasks/delete/<str:task_id>/', delete_task),
]
