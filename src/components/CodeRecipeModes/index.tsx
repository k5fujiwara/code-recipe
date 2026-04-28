import {useEffect, useState} from 'react';
import type {ReactNode} from 'react';

const focusClassName = 'code-recipe-focus-mode';
const ideClassName = 'code-recipe-ide-mode';

function setHtmlClass(className: string, enabled: boolean) {
  document.documentElement.classList.toggle(className, enabled);
}

export default function CodeRecipeModes(): ReactNode {
  const [focusMode, setFocusMode] = useState(false);
  const [ideMode, setIdeMode] = useState(false);

  useEffect(() => {
    const storedFocusMode = localStorage.getItem(focusClassName) === 'true';
    const storedIdeMode = localStorage.getItem(ideClassName) === 'true';

    setFocusMode(storedFocusMode);
    setIdeMode(storedIdeMode);
    setHtmlClass(focusClassName, storedFocusMode);
    setHtmlClass(ideClassName, storedIdeMode);
  }, []);

  function toggleFocusMode() {
    const nextValue = !focusMode;
    setFocusMode(nextValue);
    localStorage.setItem(focusClassName, String(nextValue));
    setHtmlClass(focusClassName, nextValue);
  }

  function toggleIdeMode() {
    const nextValue = !ideMode;
    setIdeMode(nextValue);
    localStorage.setItem(ideClassName, String(nextValue));
    setHtmlClass(ideClassName, nextValue);
  }

  return (
    <div className="codeRecipeModeToggles" aria-label="表示モード切り替え">
      <button type="button" aria-pressed={focusMode} onClick={toggleFocusMode}>
        Focus
      </button>
      <button type="button" aria-pressed={ideMode} onClick={toggleIdeMode}>
        IDE
      </button>
    </div>
  );
}
