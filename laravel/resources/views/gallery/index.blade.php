<html>
    <head>
        @vite('resources/css/app.css')
    </head>
    <body>
        <h3>Upload File</h3>
        <form action="/upload" method="POST" enctype="multipart/form-data">
        @csrf
            <input type="file" name="document">
            <button type="submit">Upload</button>
        </form>

        <div class="grid grid-cols-4 gap-4 my-20">
            @foreach ($images as $image)
                <div>
                    <a target="_blank" href="/gallery/{{ explode('/', $image)[1] }}">
                        <img src="storage/{{ $image }}" alt="{{ $image }}">
                    </a>
                    <p class="text-red-500"> {{ $image }} </p>
                </div>
            @endforeach
        </div>
    </body>
</html>
