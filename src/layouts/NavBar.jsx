function NavBar(){
	return <>
	<header class="p-3  text-black  navbar-dark bg-dark ">
		<div class="container">
			<div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">
				< a href="/" className= "d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
					<h1>My App</h1>
				</a>
				<div className="text-end">
					<p href="#" className= "btn btn-danger">Logout</p>
					<p className= "btn btn-success">Add User</p>
					<p class="text-light" >Signed in as Admin</p>
				</div>
			</div>
		</div>
	</header>
  </>
}

export default NavBar