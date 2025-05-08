<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class UploadController extends Controller
{
    public function upload(Request $request)
    {
        $path = $this->storeImage($request);

        return redirect()->route('gallery.index');
    }

    public function storeImage(Request $request)
    {
        $image = $request->file('document');
        $fileName = uniqid() . '.' . $image->getClientOriginalExtension();
        $path = $image->storeAs('uploads', $fileName);

        $thumbnailPath = 'thumbnails/' . $fileName;
        $intervention = Image::make($image->getRealPath());
        $intervention->fit(200, 200, function ($constraint) {
            $constraint->aspectRatio();
        })->save(storage_path('app/public/' . $thumbnailPath));

        return $path;
    }

    public function storeDocument(Request $request) {
        $request->validate([
            'document' => 'required|file|mimes:jpg,jpeg,png,pdf|max:2048',
        ]);
        $path = $request->file('document')->store('uploads');
    }

    public function index() {
        $images = Storage::disk('public')->allFiles('thumbnails');
        return view('gallery.index', ['images' => $images]);
    }

    public function imageView(Request $request, $id) {
        $baseURL = 'http://localhost:9000/laravel-tp/';
        $imgPath = Storage::path('uploads/' . $id);
        $url = $baseURL . $imgPath;
        return redirect($url);
    }
}
