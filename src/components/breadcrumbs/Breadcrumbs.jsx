import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import "./Breadcrumbs.css";

export default function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumbs__list">
        {items.map((item, i) => {
          const esUltimo = i === items.length - 1;
          return (
            <li key={item.label} className="breadcrumbs__item">
              {esUltimo ? (
                <span className="breadcrumbs__current" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link to={item.to} className="breadcrumbs__link">
                    {item.label}
                  </Link>
                  <ChevronRight size={14} className="breadcrumbs__sep" aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}