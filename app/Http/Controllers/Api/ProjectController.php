<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index()
    {
        $data = Project::with(['type', 'technologies'])->paginate(9);
        return response()->json(compact('data'));
    }

    public function showBySlug(string $slug)
    {
        $project = Project::with(['type', 'technologies'])->where('slug', $slug)->first();
        if ($project->img == null) {
            $project->img = "https://www.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg";
        }
        return response()->json(compact('project'));
    }

    public function search()
    {
        $tosearch = $_GET['tosearch'];

        $data = Project::where('name', 'like', "%$tosearch%")->with(['type', 'technologies'])->paginate(9);
        return response()->json(compact('data'));
    }
}
