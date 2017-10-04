<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active"><a href="index.html">Frontpage<span class="sr-only">(current)</span></a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Organisations <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="organisations-location.html">Ordered by location</a></li>
              <li><a href="organisations-alphabet.html">Ordered alphabetically</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Conventions<span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="conventions-location.html">Ordered by location</a></li>
              <li><a href="conventions-date.html">Ordered by date</a></li>
              <li><a href="conventions-alphabet.html">Ordered alphabetically</a></li>
            </ul>
          </li>
          <li class=""><a href="map.html">Map<span class="sr-only">(current)</span></a></li>

        </ul>


        <ul class="nav navbar-nav navbar-right">
          <li class="navbar-form navbar-left">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-info">Search</button>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>

<script>
  export default {
    name: 'navigation'
  }
</script>
