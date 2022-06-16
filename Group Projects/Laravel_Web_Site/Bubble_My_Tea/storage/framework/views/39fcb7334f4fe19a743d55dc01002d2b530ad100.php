<!DOCTYPE html>
<html>
<head>
	<meta charset= " utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Bubble My Tea</title>
    

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
    <link href="<?php echo e(asset('css/app.css')); ?>" rel="stylesheet">
</head>
<body>
<!== header ==>
    <header class="bg-light_pink md:mx-auto" height=150px>
        <div>
            <a href="<?php echo e(route('home')); ?>"><img src="images/logo.png" alt="logo" width="100" id="Logo" class="absolute top-0 right-40"></a>
            
            <a href="<?php echo e(route('home')); ?>"><h1 id="titre" class="text-black text-7xl text-center font-Lobster">Bubble My Tea</h1></br></a>
            <h2 class="text-pink text-6xl text-center font-Caveat" >les saveurs de Taïwan près de chez vous!</h2>
            <nav class="container  md:bg-sky-500/50 right-10 flex space-x-20">
                <a href="<?php echo e(route('home')); ?>">Accueil</a></br>
</br>
                <a href="<?php echo e(route('menu')); ?>" class="">Notre carte</a></br>
</br>
                <a href="<?php echo e(route('about')); ?>">Notre histoire</a></br>
</br>
                <a href="<?php echo e(route('register')); ?>">Créer mon compte</a></br>
</br>

                <a href="<?php echo e(route('bag')); ?>"><img src="images/cart.png" alt="cart" class="w-10 float-right"></a>
                <a href="<?php echo e(route('login')); ?>" class="w-9 float-right"><img src="images/user.png" alt="user"></a>
            </nav>
        </div>
    </header>
    <main>
        <?php echo $__env->yieldContent('page-content'); ?>
    </main>
    <footer class="bg-grey md:mx-auto"> 
        <div>
            <p class='text-pink text-right'>Contactez-nous!</p>
            <p class='text-black text-right'>contact@bubblemytea.fr</p>
            <img src="images/cb_logo.jpg" alt="logo cb" class="w-10 float-right">
            <img src="images/paypal_logo.png" alt="logo cb" class="w-10 float-right">
              
            <p>&copy; Bubble My Tea | 2022</p>
        </div>
    </footer>
</body>
<style>
    #logo {
        display: block;
        margin: auto;
    }

    #titre {
        display: block;
        margin: auto;
    }

    
</style>
</html>

<?php /**PATH /home/tomfleur/ETNA/BubbleMyTea/group-971066/B_my_tea/resources/views/layouts/default.blade.php ENDPATH**/ ?>