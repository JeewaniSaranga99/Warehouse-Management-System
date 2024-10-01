import ItemCards from "./ItemCards"; // Import the ItemCard component

function SwipeCards() {
    // Define the state variables


    // Sample data for the cards
    const cards = [
        {
            id: 1,
            name: 'Carole Steward',
            image: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
            position: 'Chief Executive Officer',
            description: 'Carole Steward is a visionary CEO known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world, she has a proven track record of driving innovation and achieving remarkable business growth.',
            progress: 88,
            rating: 4.95,
        },
        {
          id: 1,
          name: 'Carole Steward',
          image: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
          position: 'Chief Executive Officer',
          description: 'Carole Steward is a visionary CEO known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world, she has a proven track record of driving innovation and achieving remarkable business growth.',
          progress: 88,
          rating: 4.95,
      },
      {
        id: 1,
        name: 'Carole Steward',
        image: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
        position: 'Chief Executive Officer',
        description: 'Carole Steward is a visionary CEO known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world, she has a proven track record of driving innovation and achieving remarkable business growth.',
        progress: 88,
        rating: 4.95,
    },
    {
      id: 1,
      name: 'Carole Steward',
      image: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
      position: 'Chief Executive Officer',
      description: 'Carole Steward is a visionary CEO known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world, she has a proven track record of driving innovation and achieving remarkable business growth.',
      progress: 88,
      rating: 4.95,
  },
  {
          id: 1,
          name: 'Carole Steward',
          image: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
          position: 'Chief Executive Officer',
          description: 'Carole Steward is a visionary CEO known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world, she has a proven track record of driving innovation and achieving remarkable business growth.',
          progress: 88,
          rating: 4.95,
      },{
          id: 1,
          name: 'Carole Steward',
          image: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
          position: 'Chief Executive Officer',
          description: 'Carole Steward is a visionary CEO known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world, she has a proven track record of driving innovation and achieving remarkable business growth.',
          progress: 88,
          rating: 4.95,
      },{
          id: 1,
          name: 'Carole Steward',
          image: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
          position: 'Chief Executive Officer',
          description: 'Carole Steward is a visionary CEO known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world, she has a proven track record of driving innovation and achieving remarkable business growth.',
          progress: 88,
          rating: 4.95,
      },

        // Add more card objects as needed
        // ...
    ];

 
    return (
        <div className=' flex items-center gap-4 max-w-5xl'>
          {cards.map((card) => (
                    <div key={card.id} className="flex-none w-64 snap-center">
                        {/* Render an ItemCard component for each card */}
                        <ItemCards
                            name={card.name}
                            image={card.image}
                            position={card.position}
                            description={card.description}
                            progress={card.progress}
                            rating={card.rating}
                        />
                    </div>
                ))}
        </div>
    );
}

export default SwipeCards;