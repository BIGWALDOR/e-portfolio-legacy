const scaleFactor: number = 1 / 20;

function moveBackground(event: { clientX: number; clientY: number }): void {
  const shapes = document.querySelectorAll<HTMLElement>('.shape');
  const x: number = event.clientX * scaleFactor;
  const y: number = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; i++) {
    const isOdd: boolean = i % 2 !== 0;
    const booleanInteger = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * booleanInteger}px, ${
      y * booleanInteger
    }px)`;
  }
}

export { moveBackground };
