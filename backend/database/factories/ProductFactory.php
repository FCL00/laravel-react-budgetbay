<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "name" => fake()->name(),
            "description" => fake()->sentence(10),
            "price" => fake()->randomFloat(2, 1, 100),
            "stock" => fake()->numberBetween(1, 100),
            "image_url" => fake()->imageUrl(),
            "category_id" => Category::all()->random()->id
        ];
    }
}
