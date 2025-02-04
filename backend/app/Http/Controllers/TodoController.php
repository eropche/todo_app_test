<?php

namespace App\Http\Controllers;

use App\Services\TodoService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class TodoController extends Controller
{
    protected TodoService $todoService;

    public function __construct(TodoService $todoService)
    {
        $this->todoService = $todoService;
    }

    public function index(): JsonResponse
    {
        return response()->json($this->todoService->getAllTodos());
    }

    public function store(Request $request): JsonResponse
    {
        return response()->json($this->todoService->addTodo($request->input('text')));
    }

    public function destroy(string $id): JsonResponse
    {
        $this->todoService->deleteTodo($id);

        return response()->json(['message' => 'Deleted']);
    }
}
