<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillables = ['name','pricing','category_id'];

    public function category() {
        return $this->belongsTo(Category::class);
    }
}
