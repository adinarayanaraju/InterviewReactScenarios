import React from 'react';

const Task93_i18n = () => {
  return (
    <div>
      <h2>Task 93: Multi-Language Support (i18n) (Conceptual)</h2>
      <div className="description">
        <p>
          <strong>Internationalization (often abbreviated as i18n)</strong> is the process of designing and preparing your application so it can be adapted to various languages and regions without engineering changes. <strong>Localization (l10n)</strong> is the process of actually translating and adapting the content for a specific locale.
        </p>

        <h3>How it Works in a React App</h3>
        <p>
          A library like <strong><code>react-i18next</code></strong> (which is built on top of the powerful <code>i18next</code> framework) is the industry standard.
        </p>
        <ol>
          <li>
            <strong>Setup and Configuration:</strong>
            <ul>
              <li>You initialize <code>i18next</code> with configuration, including the supported languages, the default language, and how to load translation files.</li>
              <li>The app is wrapped in an <code>I18nextProvider</code>.</li>
            </ul>
          </li>
          <li>
            <strong>Translation Files (JSON):</strong>
            <ul>
              <li>You store your translations in JSON files, typically organized by language and namespace (feature area).</li>
              <li><code>/public/locales/en/common.json</code>: <code>&#123; "welcome": "Welcome to our application!" &#125;</code></li>
              <li><code>/public/locales/es/common.json</code>: <code>&#123; "welcome": "¡Bienvenido a nuestra aplicación!" &#125;</code></li>
            </ul>
          </li>
          <li>
            <strong>Loading Translations:</strong>
            <ul>
              <li>These JSON files can be bundled with your app or, more commonly, loaded dynamically from your server or a CDN as needed. This prevents the initial bundle from containing every language.</li>
            </ul>
          </li>
          <li>
            <strong>Using Translations in Components:</strong>
            <ul>
              <li>The <code>useTranslation</code> hook is used within your components to get access to the translation function, <code>t</code>.</li>
              <li>You replace all hardcoded text with calls to the <code>t</code> function, using a key that corresponds to the JSON files.</li>
              <pre><code>
{`import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();
  return <h1>{t('welcome')}</h1>;
}`}
              </code></pre>
            </ul>
          </li>
          <li>
            <strong>Language Switching:</strong>
            <ul>
              <li>The library provides a function (e.g., <code>i18n.changeLanguage('es')</code>) that you can call from a language switcher dropdown.</li>
              <li>When called, it will dynamically fetch the new language file if needed and re-render the entire application with the new translations.</li>
            </ul>
          </li>
        </ol>

        <h3>Advanced i18n Concepts</h3>
        <ul>
          <li><strong>Pluralization:</strong> Handling singular vs. plural forms (e.g., "1 item" vs. "2 items").</li>
          <li><strong>Interpolation:</strong> Injecting dynamic values into translations (e.g., <code>t('hello_user', &#123; name: 'Jane' &#125;)</code> -> "Hello, Jane!").</li>
          <li><strong>Formatting:</strong> Handling locale-specific formatting for dates, numbers, and currencies.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task93_i18n;
