import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MembersPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Panel de Miembros
          </h1>
          <p className="text-lg text-gray-600">
            Área de trabajo para miembros invitados del sistema
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Mis Tareas */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">📋</span>
                </div>
                Mis Tareas
              </CardTitle>
              <CardDescription>
                Gestiona tus tareas asignadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button className="w-full" variant="default">
                  Ver Tareas Pendientes
                </Button>
                <Button className="w-full" variant="outline">
                  Completar Tareas
                </Button>
                <Button className="w-full" variant="outline">
                  Historial de Tareas
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recursos */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">📁</span>
                </div>
                Recursos
              </CardTitle>
              <CardDescription>
                Accede a los recursos compartidos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button className="w-full" variant="default">
                  Ver Documentos
                </Button>
                <Button className="w-full" variant="outline">
                  Descargar Recursos
                </Button>
                <Button className="w-full" variant="outline">
                  Subir Archivos
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Comunicación */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">💬</span>
                </div>
                Comunicación
              </CardTitle>
              <CardDescription>
                Mantente conectado con el equipo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button className="w-full" variant="default">
                  Ver Mensajes
                </Button>
                <Button className="w-full" variant="outline">
                  Enviar Mensaje
                </Button>
                <Button className="w-full" variant="outline">
                  Notificaciones
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">8</div>
                <div className="text-sm text-gray-600">Tareas Pendientes</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">15</div>
                <div className="text-sm text-gray-600">Tareas Completadas</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">3</div>
                <div className="text-sm text-gray-600">Mensajes Nuevos</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">85%</div>
                <div className="text-sm text-gray-600">Progreso General</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MembersPage; 