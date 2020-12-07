import '../styles/review_card.css';

function ReviewCard({title, body}){
    return(
        <a href='https://www.facebook.com/RichmondFamilyClinic/?ref=page_internal' target='_blank'>
        <div className="review_card">
            <div className="review_card_content">
            <div className="review_card_title">
                <h3><img src= '/img/facebook-square-brands.svg' alt='Facebook'></img>{title}</h3>
            </div>
            <div className="review_card_body">
                <p>{body}</p>
            </div>
            </div>
        </div>
        </a>
    );
}

export default ReviewCard;