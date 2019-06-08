			document.addEventListener('DOMContentLoaded', function() {
			var elems = document.querySelectorAll('.parallax');
			var instances = M.Parallax.init(elems);
		  });
		    document.addEventListener('DOMContentLoaded', function() {
			var elems = document.querySelectorAll('.fixed-action-btn');
			var instances = M.FloatingActionButton.init(elems);
		  });
		    $(document).ready(function(){
			$('.sidenav').sidenav();
			$('.sidenav-cadastro').sidenav({edge: 'right'});
			$('.sidenav-login').sidenav({edge: 'right'});
			$(".dropdown-trigger").dropdown();
		  });
			
        