<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class LandingPageController extends Controller
{
    public function index()
    {
        $projects = Project::all();
        return inertia('LandingPage', ['projects' => $projects]);
    }
}