<?php

namespace App\Repositories;

use Illuminate\Support\Facades\Redis;

class TodoRedisRepository implements TodoRepositoryInterface
{
    private const KEY = 'todos';

    public function getAll(): array
    {
        $todos = Redis::lrange(self::KEY, 0, -1);

        return array_map(fn($todo) => json_decode($todo, true), $todos);
    }

    public function add($text): array
    {
        $todo = [
            'id' => uniqid(),
            'text' => $text
        ];
        Redis::rpush(self::KEY, json_encode($todo));

        return $todo;
    }

    public function delete($id): void
    {
        $todos = Redis::lrange(self::KEY, 0, -1);
        $updatedTodos = array_filter($todos, fn($todo) => json_decode($todo, true)['id'] !== $id);

        Redis::del(self::KEY);
        foreach ($updatedTodos as $todo) {
            Redis::rpush(self::KEY, $todo);
        }
    }
}
