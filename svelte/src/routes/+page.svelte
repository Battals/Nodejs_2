<script>
	let email = '';
	let password = '';
	let confirmPassword = '';
	let showForgotPassword = false;
	let showRegister = false;
	let message = '';
  
	function handleLogin() {
	  // handle login logic here
	  message = 'Login successful!';
	}
  
	function handleRegister() {
	  // handle registration logic here
	  message = 'Registration successful!';
	}
  
	function handleForgotPassword() {
	  // handle forgot password logic here
	  message = 'Password reset instructions sent to email!';
	}
  </script>
  
  {#if showForgotPassword}
	<h1>Forgot Password</h1>
	<form on:submit|preventDefault={handleForgotPassword}>
	  <label>
		Email:
		<input type="email" bind:value={email}>
	  </label>
	  <button type="submit">Reset Password</button>
	  <button type="button" on:click={() => showForgotPassword = false}>Back to Login</button>
	</form>
  {:else if showRegister}
	<h1>Register</h1>
	<form on:submit|preventDefault={handleRegister}>
	  <label>
		Email:
		<input type="email" bind:value={email}>
	  </label>
	  <label>
		Password:
		<input type="password" bind:value={password}>
	  </label>
	  <label>
		Confirm Password:
		<input type="password" bind:value={confirmPassword}>
	  </label>
	  <button type="submit" disabled={password !== confirmPassword}>Register</button>
	  <button type="button" on:click={() => showRegister = false}>Back to Login</button>
	</form>
  {:else}
	<h1>Login</h1>
	<form on:submit|preventDefault={handleLogin}>
	  <label>
		Email:
		<input type="email" bind:value={email}>
	  </label>
	  <label>
		Password:
		<input type="password" bind:value={password}>
	  </label>
	  <button type="submit">Login</button>
	  <button type="button" on:click={() => showForgotPassword = true}>Forgot Password?</button>
	  <button type="button" on:click={() => showRegister = true}>Register</button>
	</form>
  {/if}
  
  {#if message}
	<p>{message}</p>
  {/if}

  <style>
	h1 {
	  font-size: 2rem;
	  margin-bottom: 1rem;
	}
  
	form {
	  display: flex;
	  flex-direction: column;
	  gap: 1rem;
	  margin-bottom: 1rem;
	}
  
	label {
	  display: flex;
	  flex-direction: column;
	  gap: 0.25rem;
	}
  
	input {
	  padding: 0.5rem;
	  font-size: 1rem;
	  border-radius: 0.25rem;
	  border: 1px solid #ccc;
	}
  
	button {
	  padding: 0.5rem;
	  font-size: 1rem;
	  border-radius: 0.25rem;
	  border: none;
	  background-color: #4a7d88;;
	  color: #fff;
	  cursor: pointer;
	}
  
	button:hover {
	  background-color: #4a7d88;;
	}
  
	button:disabled {
	  background-color: #ccc;
	  color: #999;
	  cursor: default;
	}
  
	.message {
	  font-size: 0.875rem;
	  color: #4a7d88;
	  margin-top: 1rem;
	}
  </style>
  