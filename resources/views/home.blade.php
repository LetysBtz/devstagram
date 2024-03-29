@extends('layouts.app')

@section('titulo')
    Página Principal
@endsection

@section('contenido')
    
    {{-- listar-post es un componente se puede utilizar cuando se tiene código repetido en las vistas --}}
    <x-listar-post :posts="$posts"/>

@endsection