type Props = {
    total: number;
}

function CatalogHeader({total}: Props){
    return (
        <header className="catalog-header-container">
            <div className="catalog-header-content">
                <div>{total} Resultados</div>
            </div>
        </header>
    )
}

export default CatalogHeader;