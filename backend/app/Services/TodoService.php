<?php

namespace App\Services;

use App\Repositories\TodoRepositoryInterface;

class TodoService
{
    protected TodoRepositoryInterface $todoRepository;

    public function __construct(TodoRepositoryInterface $todoRepository)
    {
        $this->todoRepository = $todoRepository;
    }

    public function getAllTodos(): array
    {
        return $this->todoRepository->getAll();
    }

    public function addTodo(string $text): array
    {
        return $this->todoRepository->add($text);
    }

    public function deleteTodo(string $id): void
    {
        $this->todoRepository->delete($id);
    }
}
