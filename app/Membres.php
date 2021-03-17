<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Membres extends Model
{
    protected $fillable = ['name', 'picture', 'role'];
}
