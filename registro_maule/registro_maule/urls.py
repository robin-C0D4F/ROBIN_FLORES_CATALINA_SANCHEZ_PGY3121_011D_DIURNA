"""registro_maule URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django import views
from django.contrib import admin
from django.urls import path
from app_gestion import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('paginaprincipal/',views.paginaprincipal),
    path('ingresar/',views.ingresar),
    path('listar/',views.listar),
    path('buscar1/',views.buscar1),
    path('buscar/',views.buscar),
    path('modificar/',views.modificar),
    path('eliminar/',views.eliminar),
    path('ingreso_vacunado/',views.ingreso_vacunado),
    path('buscar_vacunado/',views.buscar_vacunado),
    path('listar_vacunado/',views.listar_vacunado),
    path('modificar_vacunados/',views.modificar_vacunados),
    path('eliminar_vacunado/',views.eliminar_vacunado),
    path('validar/',views.validacion_registro),
]
