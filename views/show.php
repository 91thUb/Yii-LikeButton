<?php 
$cssid = 'like-button-'.$id;
?>
<div class='vote' id ='<? echo $cssid; ?>'>
<i class='bicon-heart'></i>
<span class='name'><?php echo $title; ?></span>
<span class='cnt'><?php echo $count; ?></span>
</div>
<script>
$(document).ready(function(){
$('#<? echo $cssid; ?>').LikeButton(
		{
			alreadyVote:<?php echo $alreadyVote; ?>,
			incUrl:"<?php echo $incUrl; ?>",
			decUrl:"<?php echo $decUrl; ?>"					
		});
});
</script>
