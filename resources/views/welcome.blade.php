<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="Art web store" />
        <meta name="author" content="PUCE" />
        <meta name="csrf-token" content="{{ csrf_token() }}">
        
        <title>Miel's Art</title>

        <!-- STYLES -->

        <link href="{{ asset('css/app.css')}}" rel="stylesheet"/>

    </head>
    <body>
        <div id="app"></div>
        <script src={{asset('js/app.js')}}></script>
    </body>
</html>
