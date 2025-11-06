import { useGetCategory } from "@/api/getCategory"
import { NoticiaType } from "@/types/noticia"
import { ResponseType } from "@/types/response"

interface FiltersControlsCategoryProps {
    category: string;
}

export const FiltersControlsCategory = ({ category }: FiltersControlsCategoryProps) => {
    const { result }: ResponseType = useGetCategory(category);
    
    // Sort by date (newest first) and limit to 3 items
    const sortedAndLimitedNews = result != null 
        ? [...result]
            .sort((a: NoticiaType, b: NoticiaType) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
            .slice(0, 3)
        : [];
    
    return (
        <ul className="mb-5">
            {sortedAndLimitedNews.map((noticia: NoticiaType) => {
                const { titulo, slug } = noticia;
                return (
                    <li className="mb-2 hover:bg-slate-50" key={slug}>
                        <a href={`/noticias/${slug}`}>{titulo}</a>
                        <hr />
                    </li>
                );
            })}
        </ul>
    );
};