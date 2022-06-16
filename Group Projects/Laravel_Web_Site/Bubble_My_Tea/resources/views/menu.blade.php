@extends('layouts/default')
@section('page-content')
    <section class="relative min-h-screen flex items-center"> 
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <div class="container"> 
            <div class="menu bg-menu_background md:mx-auto">
                <h2 class="menu-group-heading text-3xl text-center font-Lobster">Notre carte</h2>
</br>
                 <div class="menu-group">
                    <div class="menu-item">
                        <img src="images/teas/caramel.jpg" alt="Bubbletea caramel" class="menu-item-image ">
                        <div class="menu-item-text">
                            <h3 class="menu-item-heading">
                                <span class="menu-item-name">Caramel</span>
                                <span class="menu-item-price">5.49€</span>
                            </h3>
                            <p class="menu-item-description text-">
                                Notre best seller ! Un équilibre parfait entre caramel et lait de soja.
                            </p>
                            <a href=" {{ route('bag') }}"><button class="bouton_ajouter_au_panier border-4 ring-2 ring-purple-10 font-Pacifico" type="button">Ajouter au panier</button></a>
                        </div> 
                    </div>
                    </br>

                    <div class="menu-item">
                        <img src="./images/teas/pistache.jpg" alt="Bubbletea pistache" class="menu-item">
                        <div class="menu-item-text">
                            <h3 class="menu-item-heading">
                                <span class="menu-item-name">Pistache</span>
                                <span class="menu-item-price">4.99€</span>

                                
                            </h3>
                            <p class="menu-item-description">
                                Une envie de différent ? Essayez notre nouvelle recette à base de pistache, vous ne le regretterez pas !
                            </p>
                            <a href=" {{ route('bag') }}"><button class="bouton_ajouter_au_panier border-4 ring-2 ring-purple-10 font-Pacifico" type="button">Ajouter au panier</button></a>
                        </div> 
                    </div>
                    </br>

                    <div class="menu-item">
                        <img src="images/teas/coco.jpg" alt="Bubbletea coco" class="menu-item-image">
                        <div class="menu-item-text">
                            <h3 class="menu-item-heading">
                                <span class="menu-item-name">Cocotea</span>
                                <span class="menu-item-price">4.99€</span>
                            </h3>
                            <p class="menu-item-description">
                                Vous vous demandiez d'où venait la chanson "I'm in love with the coco" ? Goûtez notre Cocotea et vous aurez toutes les réponses à vos questions. 
                            </p>
                            <a href=" {{ route('bag') }}"><button class="bouton_ajouter_au_panier border-4 ring-2 ring-purple-10 font-Pacifico" type="button">Ajouter au panier</button></a>
                        </div> 
                    </div>
                    </br>

                    <div class="menu-item">
                        <img src="images/teas/fraise.jpg" alt="Bubbletea fraise" class="menu-item-image">
                        <div class="menu-item-text">
                            <h3 class="menu-item-heading">
                                <span class="menu-item-name">Fraise</span>
                                <span class="menu-item-price">4.49€</span>
                            </h3>
                            <p class="menu-item-description">
                                Le classique de la maison. Simple et efficace, on ne change pas une équipe qui gagne.
                            </p>
                            <a href=" {{ route('bag') }}"><button class="bouton_ajouter_au_panier border-4 ring-2 ring-purple-10 font-Pacifico" type="button">Ajouter au panier</button></a>
                        </div> 
                    </div>
                    </br>

                    

                </div>
            </div>
        </div>
    </section>         
@endsection
