<?php

namespace App\Repositories;

interface TodoRepositoryInterface
{
    public function getAll(): array;
    public function add(string $text): array;
    public function delete(string $id): void;
}
