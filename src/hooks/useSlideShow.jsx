import { useRef,useEffect,useState } from 'react';

const useSlideShow = (time) => {
    const [ duration, setDuration ] = useState(((time || 1)*1000));

    const slideshow = useRef(null);
    const intervalSlideshow = useRef(null);
    const next = () => {
        if(slideshow?.current?.children?.length > 0) {
            const [ firstElement,...restElements ] = slideshow.current.children;

            slideshow.current.style.transition = `${duration}ms ease-out all`;
            
            const SlideSize = firstElement.offsetWidth;

            slideshow.current.style.transform = `translateX(-${SlideSize}px)`;
            
            const transitionON = () =>{
                slideshow.current.style.transition = 'none';
            
                slideshow.current.style.transform = `translateX(0)`;

                slideshow.current.appendChild(firstElement);
            }

            slideshow.current.addEventListener('transitionend',transitionON);
        }

        return slideshow;
    };

    useEffect(()=>{
        intervalSlideshow.current = setInterval(()=>{
            next();
       }, duration);
   },[]);

    return {
        next
    }
}

export default useSlideShow;