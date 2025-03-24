<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = ['total_price', 'customer_id'];

    public function customer() {
        return $this->belongsTo(Customer::class);
    }

    public function payments() {
        return $this->hasMany(Payment::class);
    }

    public function order_products() {
        return $this->hasMany(OrderProduct::class);
    }

}
