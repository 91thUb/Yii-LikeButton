<?php


class LikeButton extends CWidget {
	
	public $count = 0,
		   $id=0,
		   $alreadyVote='false',
		   $incUrl='false',
		   $decUrl='false',
		   $title='Like';	
	
	public function init()
	{		
			$fileCss=dirname(__FILE__).DIRECTORY_SEPARATOR.'static'.DIRECTORY_SEPARATOR.'main.css';
			$fileCss=Yii::app()->getAssetManager()->publish($fileCss);
			
			$fileJs=dirname(__FILE__).DIRECTORY_SEPARATOR.'static'.DIRECTORY_SEPARATOR.'main.js';
			$fileJs=Yii::app()->getAssetManager()->publish($fileJs);
			
			$cs=Yii::app()->clientScript;
			$cs->registerCoreScript('jquery');
			$cs->registerCssFile($fileCss);
			$cs->registerScriptFile($fileJs);
		
		parent::init();
	}
	
	protected function registerClientScript()
	{
		// …подключаем здесь файлы CSS или JavaScript…
		
		//$cs->registerScriptFile($jsFile);
	}
	
	public function run()
	{		
		 
		$this->render('show', array(
				'count'=>$this->count,
				'id'=>$this->id,
				'title'=>$this->title,
				'alreadyVote'=>$this->alreadyVote,
				'incUrl'=>$this->incUrl,
				'decUrl'=>$this->decUrl,				
				));
	}
	
	
}