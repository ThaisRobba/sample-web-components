<svelte:options tag="svelte-component"/>

<script>
	let todos = [
		{ done: false, text: 'Comprar leite' },
		{ done: false, text: 'Limpar prateleira' },
		{ done: false, text: 'Enviar encomenda' }
	];

	function add() {
		todos = todos.concat({ done: false, text: '' });
	}

	function clear() {
		todos = todos.filter(t => !t.done);
	}

	$: remaining = todos.filter(t => !t.done).length;
</script>

<h1>Todos</h1>

{#each todos as todo}
	<div>
		<input
			type=checkbox
			bind:checked={todo.done}
		>

		<input
			placeholder="O que precisa ser feito?"
			bind:value={todo.text}
			disabled={todo.done}
		>
	</div>
{/each}

{#if remaining > 0}
    <p>Tarefas restantes: {remaining}</p>
{:else}
    <p>Tudo feito! Lembre de beber uma água.</p>
{/if}

<button on:click={add}>
	Novo
</button>

<button on:click={clear}>
    Remover tudo
</button>

<style>
    h1 {
        font-family: 'Rubik', sans-serif;
    }
    
    p {
        color: grey;
        font-family: 'Rubik', sans-serif;
    }

    input {
        border: none;
        padding: 4px;
        font-family: 'Rubik', sans-serif;
    }

    input:disabled {
        text-decoration: line-through;
    }

    button {
        padding: 8px;
        background-color: lightblue;
        color: white;
        border: none;
        border-radius: 8px;
    }
</style>
