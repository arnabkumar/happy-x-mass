$(document).ready(function(){
	
	//Plax
	

$('#top_p_banar_id').plaxify({"xRange":10,"yRange":10,})
$.plax.enable() 

     //spritely animation active
	 
	 //bottom_x_tree animation
	 $('#bottom_x_tree').pan({fps: 30, speed: 2, dir: 'left', depth: 70});
	 
	 /* santa_friend_moove animation*/
         $('#santa_friend_moove')
      .sprite({fps: 8, no_of_frames: 3})
      .spRandom({
          top: 300,
          left: 0,
          right: 0,
          bottom: 700,
          speed: 4000
      });
	  /* top_santa_cap_id animation */
	    $('#top_santa_cap_id')
        .sprite({fps: 8, no_of_frames: 3})
		.isDraggable()
        .spRandom({
		  top: 50,
          left: 600,
          right: 1000,
          bottom: 100,
          speed: 4000,
		});
		
		// snowfall active
		
		
$(document).snowfall(
            {flakeCount : 100, 
			maxSpeed : 10, 
			maxSize : 13, 
			round : true, 
			
			});
			
			
		
		// countdown active
		
		$('#countdown_dashboard').countDown({
					targetDate: {
						day: 1,
                    month: 1,
                    year: 2015,
                    hour: 0,
                    min: 0,
                    sec: 0					}
				});
		 
		
		
		
		
  
});





    


/*----------------------------------------------------*/
/* Preloader
------------------------------------------------------ */

  $(window).load(function(){

    $('.loader').fadeOut();    
    $('#preloader').delay(350).fadeOut('slow');    
    $('body').delay(350);   

    });

	
	
	
	
	
	
	



	
	
	
	
	
	
	
	
	
	
	
	
	
	



