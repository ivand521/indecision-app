const app = {
  title: 'Indecision',
  subtitle: 'This app helps you decide what to do!',
  options:[]
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option && app.options.indexOf(option) == -1) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

const onRemoveAll = () => {
  app.options = [];
  renderApp();
};

const onMakeDecision = () => {
  const index = Math.floor(Math.random() * app.options.length);
  const decision = app.options[index];
  alert(decision)
};

const appRoot = document.getElementById('app');

const numbers = [55, 1002, 1000];

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0}onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>

      <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

renderApp();
