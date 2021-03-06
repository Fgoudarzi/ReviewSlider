import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
function Review({people , index , setIndex}){
return (
            <div className="section-center">
                {people.map((person, personIndex) => {
                            const { id, image, name, title, quote } = person;
                            let position = 'nextSlide';
                            if (
                                personIndex === index - 1 ||
                                (index === 0 && personIndex === people.length - 1)
                            ) {
                                position = 'lastSlide';
                            } 
                            if (personIndex === index) {
                                position = 'activeSlide';
                            }

                            return ( 
                                < div key={id}>
                                <article className={position} >
                                    <img src={image} alt={name} className="person-img" />
                                    <h4>{name}</h4>
                                    <p className="title">{title}</p>
                                    <p className="text">{quote}</p>
                                    <FaQuoteRight className="icon" />
                                </article>
                                <button className="prev" onClick={() => setIndex(index - 1)}>
                                   <FiChevronLeft />
                                </button>
                                <button className="next" onClick={() => setIndex(index + 1)}>
                                    <FiChevronRight />
                                </button>
                                </div>
                                
                        
                            );
                            })}
         
             </div>
                )


}
 export default Review