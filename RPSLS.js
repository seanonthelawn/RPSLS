$(document).ready(function(){
    
    var playerChoice = 0;
    var computerChoice = 0;
    var output = "Default Value";
    var playerWinCount=0;
    var computerWinCount = 0;
    $('#rock').click(function(){
        playerChoice = 1;
        
        computerChoice = Math.floor(Math.random() * 5) + 1; 
        
	});	
    
        $('#paper').click(function(){
        playerChoice = 2;
        
        computerChoice = Math.floor(Math.random() * 5) + 1; 
        
        
	});	
    
        $('#scissors').click(function(){
        playerChoice = 3;
        
        computerChoice = Math.floor(Math.random() * 5) + 1;  
        
        
	});	
    
        $('#lizard').click(function(){
        playerChoice = 4;
        
        computerChoice = Math.floor(Math.random() * 5) + 1;  
        
        
	});	
    
        $('#spock').click(function(){
        playerChoice = 5;
        
        computerChoice = Math.floor(Math.random() * 5) + 1;  
        
        
	});	
    
    $('.buttons').click(function(){
       if (playerWinCount< 2 && computerWinCount <2){
        if (playerChoice == 1){
            if(computerChoice == 1){
                $('#outputZone').html("Tie with rock");
                
            }
            
            else if(computerChoice == 2){
                $('#outputZone').html("Paper covers rock");
                computerWinCount++;            
            }
            
            else if(computerChoice == 3){
                $('#outputZone').html("Rock smashes Scissors");
                playerWinCount++;               
            }
            
            else if(computerChoice == 4){
                $('#outputZone').html("Rock crushes Lizard");
                playerWinCount++;
            }
            
            else if(computerChoice == 5){
                $('#outputZone').html("Spock vaporizes Rock");
               
            }
        }
        
        if (playerChoice == 2){
             if(computerChoice == 1){
                $('#outputZone').html("Paper Covers Rock");
                 playerWinCount++;
            }
            
            if(computerChoice == 2){
                $('#outputZone').html("Tie with Paper");
            }
            
            if(computerChoice == 3){
                $('#outputZone').html("Scissors cuts Paper");
                computerWinCount++; 
            }
            
            if(computerChoice == 4){
                $('#outputZone').html("Lizard eats Paper");
                computerWinCount++; 
            }
            
            if(computerChoice == 5){
                $('#outputZone').html("Paper disproves Spock");
                playerWinCount++;
            }
        }
        
        if (playerChoice == 3){
             if(computerChoice == 1){
                $('#outputZone').html("Rock smashes Scissors");
                 computerWinCount++; 
            }
            
           else if(computerChoice == 2){
                $('#outputZone').html("Scisssors cuts Paper");
               playerWinCount++;
            }
            
           else if(computerChoice == 3){
                $('#outputZone').html("Tie with Scissors");
            }
            
            else if(computerChoice == 4){
                $('#outputZone').html("Scissors decapitates Lizard");
                playerWinCount++;
            }
            
            else if(computerChoice == 5){
                $('#outputZone').html("Spock smashes Scissors");
                computerWinCount++; 
            }
        }
        
        if (playerChoice == 4){
             if(computerChoice == 1){
                $('#outputZone').html("Rock crushes Lizard");
                 computerWinCount++; 
            }
            
            else if(computerChoice == 2){
                $('#outputZone').html("Lizard eats Paper");
                playerWinCount++;
            }
            
            else if(computerChoice == 3){
                $('#outputZone').html("Scissors decapitate Lizard");
                computerWinCount++; 
            }
            
            else if(computerChoice == 4){
                $('#outputZone').html("Tie with Lizard");
                
            }
            
            else if(computerChoice == 5){
                $('#outputZone').html("Lizard Poisons Spock");
                playerWinCount++;
            }
        }
        if (playerChoice == 5){
             if(computerChoice == 1){
                $('#outputZone').html("Spock vaporizes Rock");
                 playerWinCount++;
            }
            
            else if(computerChoice == 2){
                $('#outputZone').html("Paper disproves Spock");
                computerWinCount++; 
            }
            
            else if(computerChoice == 3){
                $('#outputZone').html("Spock smashes Scissors");
                playerWinCount++;
            }
            
            else if(computerChoice == 4){
                $('#outputZone').html("Lizard poisons Spock");
                computerWinCount++; 
            }
            
            else if(computerChoice == 5){
                $('#outputZone').html("Tie with Spock");
            }
        }
        
        if (playerWinCount == 2){
            $('#winnerZone').html("You Win!");
        }
        
        else if (computerWinCount == 2){
            $('#winnerZone').html("You lose");
        }
            
	   }
        
   });
});
    