export type NoticiaType = {
    id: number,
    titulo: string;
    slug: string;
    subtitulo: string;
    descripcion: string;
    contenido: string;
    active: boolean;
    isFeatured: boolean;
    fecha: string;
    imagenes: {

        id: number;
        url: string;

    }[];
    videos: {

        id: number;
        url: string;

    }[];
    imagenPrincipal: {

        id: number;
        url: string;

    };
    category: {
        name: string;
        data: {
            attributes: {
                slug: string;
                categoryName: string;
            };
        };
    };

};