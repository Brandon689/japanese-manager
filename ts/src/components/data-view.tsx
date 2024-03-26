import { useState, useEffect } from 'react';
import { ProductService } from 'api/anilist/anilist';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { InputText } from 'primereact/inputtext';
import { useDebounce } from 'primereact/hooks';
import { classNames } from 'primereact/utils';

export default function AdvancedDataViewComponent() {
    const [products, setProducts] = useState<Media[]>([]);
    const [layout, setLayout] = useState('grid');
    const [inputValue, debouncedValue, setInputValue] = useDebounce('', 200);

    const [selectedItem, setSelectedItem] = useState<Media>();

    const handleItemClick = (anime: Media) => {
        setSelectedItem(anime);
        console.log(anime)
    };

    useEffect(() => {
        if (debouncedValue.trim() !== '') {
            ProductService.getProductsData(debouncedValue).then((data) => setProducts(data.media));
        }
    }, [debouncedValue]);

    const gridItem = (anime: Media) => {
        return (
            <div className={`col-fixed ${anime === selectedItem ? 'selected' : ''}`} key={anime.id}>
                <div className="">
                    <div className="media-card flex flex-column gap-3" onClick={() => handleItemClick(anime)}>
                        <a className="cover">
                            <img className="cover-card" src={anime.coverImage?.large} alt={anime.title?.romaji} />
                        </a>
                        <h5 className="">{anime.title?.romaji}</h5>
                    </div>
                </div>
            </div>
        );
    };

    const listItem = (anime: Media, index: number) => {
        return (
            <div className={`col-12 ${anime === selectedItem ? 'selected' : ''}`} key={anime.id}>
                <div onClick={() => handleItemClick(anime)} className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>
                    <img className="list-img shadow-2 block xl:block mx-auto" src={anime.coverImage?.large} alt={anime.title?.romaji} />
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <h5 className="">{anime.title?.romaji}</h5>
                            <div className="flex align-items-center gap-3">
                                <span className="flex flex-column">
                                    <span className="">{anime.episodes} Episodes</span>
                                    <div className="">{anime.season.charAt(0) + anime.season.slice(1).toLowerCase()} {anime.startDate?.year}</div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };


    const itemTemplate = (anime: Media, layout: string, index: number) => {
        if (!anime) {
            return;
        }

        if (layout === 'list') return listItem(anime, index);
        else if (layout === 'grid') return gridItem(anime);
    };

    const listTemplate = (animes: Media[], layout: string) => {
        if (layout === 'list') return <div className="">{animes.map((anime, index) => itemTemplate(anime, layout, index))}</div>;
        if (layout === 'grid') return <div className="data-grid">{animes.map((anime, index) => itemTemplate(anime, layout, index))}</div>;
    };

    const header = () => {
        return (
            <div className="flex justify-content-between">
                <InputText type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
            </div>
        );
    };

    return (
        <div className="frame">
            <DataView value={products} listTemplate={listTemplate} layout={layout} header={header()} />
        </div>
    )
}
