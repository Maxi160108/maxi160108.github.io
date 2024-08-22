// Funcionalidad para arrastrar y soltar botones
const buttons = document.querySelectorAll('.drag-button');
const dropArea = document.getElementById('drop-area');
const codeBlock = document.getElementById('code-block');

buttons.forEach(button => {
    button.addEventListener('dragstart', dragStart);
});

dropArea.addEventListener('dragover', dragOver);
dropArea.addEventListener('drop', dropButton);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.code);
    e.dataTransfer.setData('text/explanation', e.target.dataset.explanation);
}

function dragOver(e) {
    e.preventDefault();
}

function dropButton(e) {
    e.preventDefault();
    const buttonCode = e.dataTransfer.getData('text/plain');
    const buttonExplanation = e.dataTransfer.getData('text/explanation');

    // Mostrar el código HTML del botón arrastrado en la sección de "Código Generado"
    codeBlock.innerHTML = ''; // Limpiar cualquier contenido previo
    const codeElement = document.createElement('pre');
    codeElement.textContent = buttonCode;

    codeBlock.appendChild(codeElement);

    // Añadir una explicación de cómo funciona el código
    const explanation = document.createElement('p');
    explanation.textContent = buttonExplanation;

    codeBlock.appendChild(explanation);
}
