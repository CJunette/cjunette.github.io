import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export const ScrollToUpdateURL = ({sectionIds}) => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    navigate(`#${id}`, {replace: true}); // 更新 URL 的后缀
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null, // 使用视口作为根
            rootMargin: "0px",
            threshold: 0.5, // 元素至少 50% 可见时触发
        });

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [sectionIds, navigate]);

    return null; // 该组件不渲染任何内容
};