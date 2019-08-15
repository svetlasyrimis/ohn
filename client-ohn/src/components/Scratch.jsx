<ReactCardFlip isFlipped={props.isFlipped} flipDirection="vertical">
        <ProjectCardFront key="front">
          This is the front of the card.
          <button onClick={props.handleClick}>Click to flip</button>
  </ProjectCardFront>
  <ProjectCardFront key="back">
          This is the front of the card.
          <button onClick={props.handleClick}>Click to flip</button>
  </ProjectCardFront>
</ReactCardFlip>