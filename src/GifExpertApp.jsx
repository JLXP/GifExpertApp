import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <nav>
                <div className="navbar-menu">
                    <svg width="48" height="48" viewBox="0 0 115 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.20354 30.2825L57.5 0.583726L106.796 30.2825V89.7175L57.5 119.416L8.20354 89.7175V30.2825Z" fill="url(#paint0_linear_159_30)" stroke="black" />
                        <path d="M47.4242 65.1719V45.5625H53.7523V65.1719C53.7523 67.0729 53.3227 68.7135 52.4633 70.0938C51.6169 71.4609 50.4646 72.5221 49.0063 73.2773C47.5609 74.0195 45.9268 74.3906 44.1039 74.3906C42.2289 74.3906 40.5622 74.0781 39.1039 73.4531C37.6456 72.8151 36.4997 71.8451 35.6664 70.543C34.8461 69.2279 34.4359 67.5547 34.4359 65.5234H40.8031C40.8031 66.526 40.9268 67.3203 41.1742 67.9062C41.4346 68.4792 41.8122 68.8828 42.307 69.1172C42.8018 69.3516 43.4008 69.4688 44.1039 69.4688C44.781 69.4688 45.3669 69.306 45.8617 68.9805C46.3565 68.6419 46.7406 68.1536 47.0141 67.5156C47.2875 66.8646 47.4242 66.0833 47.4242 65.1719ZM62.6109 45.5625L67.6109 55.25L72.6109 45.5625H79.8766L71.7906 59.6641L80.0914 74H72.7672L67.6109 64.1367L62.4742 74H55.1305L63.4508 59.6641L55.3453 45.5625H62.6109Z" fill="black" />
                        <defs>
                            <linearGradient id="paint0_linear_159_30" x1="57.5" y1="0" x2="57.5" y2="120" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#F7F7F7" stop-opacity="0.96" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <p>GifExpertApp</p>
                </div>
            </nav>
            <div className="main-img">
                <AddCategory
                    onNewCategory={onAddCategory}
                />
                {categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))}
            </div>
        </>
    )
}
