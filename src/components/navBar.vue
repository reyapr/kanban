<template>
    <nav class="navbar navbar-inverse navbar-fixed-top" style='background-color: cornflowerblue'>
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#" style='color:white'>Kanban</a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <li >
                            <a href="#" style='color:white'>Home</a>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <form class="navbar-form" role="search">
                                <div class="form-group input-group">
                                    <input type="text" class="form-control" placeholder="Search..">
                                    <span class="input-group-btn">
                                        <button class="btn btn-default" type="button">
                                            <span class="glyphicon glyphicon-search"></span>
                                        </button>
                                    </span>
                                </div>
                            </form>
                        </li>
                        <li>
                            <a href="#" >
                                <span type='submit' class="glyphicon glyphicon-log-out" style='color:white'>Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</template>