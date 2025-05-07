<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

class UploadController extends Controller
{
    public function upload(Request $request)
    {
        $path = $this->storeImage($request);

        return response()->json(['path' => $path], 200);
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
}
