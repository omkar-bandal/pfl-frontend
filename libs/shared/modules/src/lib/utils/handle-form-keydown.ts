//Function to avoid form submission on enter key press
export const handleFormKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === 'Enter') {
      const targetElement = event.target as HTMLElement; 
      if (targetElement.tagName !== 'TEXTAREA') {
        event.preventDefault();
      }
    }
  };